// Bài tập Js-Quản lý tuyển sinh

/**
 * Khối 1: Input
 * Điểm chuẩn
 * Đối tượng
 * Khu vực ưu tiên
 * Điểm môn 1
 * Điểm môn 2
 * Điểm môn 3
 * 
 * Khối 2 Các bước xử lý
 * 
 * B1: Tìm thẻ html và lấy giá trị
 * 
 * B2: Xây dựng hàm và công thức
 * Các bước xử lý
 * Đầu tiên phải xét các môn (Mon1, Mon2, Mon3 > 0) thực hiện lệnh tiếp theo. 
 * Th: Ngược lại in ra thông báo Bạn có môn điểm tử. Chia buồn cùng bạn. Rớt thì làm lại
 *  
 * Xét trường hợp (Mon1, Mon2, Mon3 > 0)
 * Biến sum = Mon1 + Mon2 + Mon3 + (doiTuong-InputdoiTuong) Điểm đối tượng + (khuVuc-InputkhuVuc) Điểm khu vực
 * 
 * Lấy biến sum so sánh với diemChuan(InputdiemChuan).
 * Th1: Nếu sum > diemChuan
 * In ra kết quả thông báo: Đậu rồi nhé. Chúc mừng bạn. Điểm của bạn là : + sum
 * 
 * Th2: Nếu sum < diemChuan
 * In ra kết quả thông báo rớt.Bạn quá thông minh hãy đến một ngôi trường khác nhé. Điểm của bạn là : + sum
 * 
 * B3: Hiển thị UI
 * 
 * Khối 3: Output
 * Xuất kết quả điểm kèm thông báo
 */

function nguyenVong(){
    var mon1 = parseFloat(document.getElementById('diemMon1').value);
    var mon2 = parseFloat(document.getElementById('diemMon2').value);
    var mon3 = parseFloat(document.getElementById('diemMon3').value);
    var diemChuan = parseFloat(document.getElementById('InputdiemChuan').value);
    var doiTuong = parseFloat(document.getElementById('InputdoiTuong').value);
    var khuVuc = parseFloat(document.getElementById('InputkhuVuc').value);
    var sum = mon1 + mon2 + mon3 + doiTuong + khuVuc;
    if(mon1 > 0 && mon2 > 0 && mon3 > 0 ){
        if(sum >= diemChuan){
            document.getElementById('txtResult').innerHTML = "Đậu rồi nhé. Chúc mừng bạn. Điểm của bạn là :" + sum;
        }else{
            document.getElementById('txtResult').innerHTML = "Trượt rồi nhé. Trường này không thể có được bạn vì bạn quá thông minh. Điểm của bạn là :" + sum;
        }
    }else{
        document.getElementById('txtResult').innerHTML = "Wow. Trượt rồi nhé. Bạn có điểm tử (0). Điểm của bạn là :" + sum;
    }
}

