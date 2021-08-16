// Bài tập 4 Js If-else
/**
 * Khối 1: Input
 * Loại khách hàng
 * Phí xử lý hóa đơn
 * Phí dịch vụ cơ bản
 * Thuê kênh cao cấp
 * Phí thu thêm mỗi kênh đối với doanh nghiệp khi hết nối trên 10
 * 
 * Khối 2 Xây dựng công thức và các trường hợp
 * Các bước xử lý
 * B1 Tìm thẻ html và lấy giá trị
 * var channel = document.getElementById('InputChannel').value
 * var connect = document.getElementById('inputConnect').value
 * var money = 0;
 * TH: Nhà dân
 * const hoaDon = 4.5
 * const dvCoBan = 20.5
 * const kenhCaoCap = 7.5
 * 
 * TH Doanh nghiệp
 * const hoaDonDn = 15
 * const dvCoBanDn = 75
 * const kenhCaoCapDn = 50
 * const phuThu = 5
 * 
 * B2 Xây dựng công thức tính theo từng trường hợp
 * TH: Nhà dân
 * money = hoaDon + dvCoBan + channel * kenhCaoCap
 * 
 * TH: Doanh nghiệp
 * (TH1 channel <= 10)
 * money = hoaDonDn + dvCoBanDn +  channel * kenhCaoCapDn
 * (TH1 channel > 10)
 * money = hoaDonDn + dvCoBanDn +  channel * kenhCaoCapDn + (connect - 10) * phuThu
 * 
 * B3 Hiển thị UI
 * 
 * Khối 3
 * Xuất kết quả tiền phải trả dựa vào theo những dịch vụ đã dùng
 */

// Khai báo hàm
function tinhTienCap (){
    // TH: Nhà dân
     const hoaDon = 4.5
     const dvCoBan = 20.5
     const kenhCaoCap = 7.5
    
    // * TH Doanh nghiệp
     const hoaDonDn = 15
     const dvCoBanDn = 75
     const kenhCaoCapDn = 50
     const phuThu = 5
    var code = document.getElementById('inputCode').value;
    var channel = parseInt(document.getElementById('inputChannel').value);
    var connect = parseInt(document.getElementById('inputConnect').value);
    var money = 0;
    var customer = document.getElementById('typeCustom').value;

    switch (customer){
        case "nhaDan":
            money = hoaDon + dvCoBan + channel * kenhCaoCap;
            break;
        case "doanhNghiep":
            if(connect < 10 && connect > 0 ){
            money = hoaDonDn + dvCoBanDn +  channel * kenhCaoCapDn;   
            }else{
            money = hoaDonDn + dvCoBanDn +  channel * kenhCaoCapDn + (connect - 10) * phuThu;
            }
            break;
        default:
            alert('Vui lòng chọn loại khách hàng')
    }
    document.getElementById('txtResult_Bt4').innerHTML = "Mã khách hàng: " + code + "; " + "Tiền cáp: " + money + "$" ;

}
document.getElementById('CalBtn_Bt4').onclick = tinhTienCap;