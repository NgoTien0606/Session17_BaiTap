// Viết một lớp các đối tượng điện thoại lấy tên là Mobile, mỗi một chiếc mobile phone khi được tạo ra sẽ mang những đặc điểm sau:
class Mobile {
    // Có một thông số về trạng thái pin tính bằng đơn vị số nguyên(tối đa 100 đv).
    pin;

    // Có một vùng nhớ dùng để lưu tin nhắn đang soạn thảo.
    tinNhanDangSoan = "";

    // Có một vùng nhớ dùng để lưu tin nhắn trong hộp thư đến.
    hopThuDen = [];

    // Có một vùng nhớ dùng để lưu tin nhắn đã gửi.
    hopThuGui = [];
    status = true;

    // Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị. this.pin--;

    // Các chức năng không thể hoạt động nếu điện thoại chưa bật.
    // if(!this.status) {
    //     return

    constructor(pin) {
        // Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
        if (this.pin > 100 || this.pin < 1) {
            pin = 80
        } else {
            this.pin = pin;
        }

        // Có chức năng bật và tắt điện thoại.
        this.batTatDienThoai = (value) => {
            this.status = value;
        }

        // Có chức năng xạc pin điện thoại.
        this.sacPin = () => {
            this.pin++;
        }

        // Có chức năng soạn tin nhắn.
        this.soanTinNhan = (value) => {
            if (!this.status) {
                return
            }
            this.tinNhanDangSoan = value;
            this.pin--;
        }

        // Có chức năng nhận tin nhắn từ một chiếc mobile khác.
        this.nhanTinNhan = (value, phone) => {
            if (!this.status) {
                return
            }
            this.hopThuDen.push(value);
            this.pin--;
        }

        // Có chức năng gửi tin nhắn tới một chiếc mobile khác.
        this.guiTinNhan = (phone) => {
            if (!this.status) {
                return
            }
            this.hopThuGui.push(this.tinNhanDangSoan);
            phone.nhanTinNhan(this.tinNhanDangSoan);
            this.tinNhanDangSoan = "";
            this.pin--;
        }

        // Có chức năng xem tin trong hộp thư đến.
        this.xemTinTrongHopThuDen = () => {
            this.pin--;
            if (!this.status) {
                return
            }
            return this.hopThuDen;
        }

        // Có chức năng xem tin đã gửi.
        this.xemTinDaGui = () => {
            if (!this.status) {
                return
            }
            this.pin--;
            return this.hopThuGui;
        }
    }
}

// Khởi tạo các đối tượng điện thoại và thực hiện kịch bản sau:
// Có một chiếc điện thoại nokia và một chiếc iphone
let nokia = new Mobile(39);
let iphone = new Mobile(66);

// Chiếc điện thoại nokia soạn tin nhắn với nội dung bất kỳ và gửi cho chiếc iphone Chiếc iphone kiểm tra inbox và hiển thị tin đó.
nokia.soanTinNhan("Xin chào!");
nokia.guiTinNhan(iphone)
console.log(iphone.xemTinTrongHopThuDen());
