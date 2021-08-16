// Bài tập 2 Js Lệnh If-else
/**
 * Khối 1 Input
 * Tên khách hàng
 * Số Kw điện tiêu thụ
 * 
 * Khối 2 Các bước xử lý
 * B1 Tìm thẻ html và lấy giá trị
 * B2 Tạo biến và khai báo hàm
 * kw (số kw được tiêu thụ)
 * const price1 = 500
 * const price2 = 650
 * const price3 = 850
 * const price4 = 1110
 * const price5 = 1300
 * money = kw * giá tiền theo từng mốc (price1, price2 ,price3, price4, price5);
 * name (tên khách hàng)
 * B3 Xây dựng công thức tính theo từng trường hợp
 * TH1: kw <= 50
 * money = kw *price1
 * TH2: 50 < kw <= 100
 * money = 50 *price1 + (kw -50)*price2
 * TH3: 100 < kw <= 200
 * money = 50 * price1 + 50 * price2 + (kw - 100) * price3
 * TH4: 200 < kw <= 350
 * money = 50 * price1 + 50 * price2 + 100 * price3 + (kw - 200) * price4
 * TH5: kw > 350
 * money = 50 * price1 + 50 * price2 + 100 * price3 + 150 * price4 + (kw - 350) * price5
 * B4 Hiển thị UI
 * 
 * Khối 3 Output
 * Xuất kết quả tiền điện kèm theo tên khách hàng
 */

// Khai báo hàm
function tienDien (){
    // Tạo biến
    const price1 = 500;
    const price2 = 650;
    const price3 = 850;
    const price4 = 1100;
    const price5 = 1300;

    var name = document.getElementById('NameCustomer').value;
    var kw = parseFloat(document.getElementById('inputKw').value);
    var money = 0;
    if (kw < 0){
            document.getElementById('txtResult_Bt2').innerHTML = "Vui lòng nhập đúng số Kw tiêu thụ"
    }else{

        if (0 < kw && kw <= 50){
            money = kw *price1;
        }else if (50 < kw && kw <= 100){
            money = 50 *price1 + (kw -50)*price2;
        }else if (100 < kw && kw <= 200){
            money = 50 * price1 + 50 * price2 + (kw - 100) * price3;
        }else if (200 < kw && kw <= 350){
            money = 50 * price1 + 50 * price2 + 100 * price3 + (kw - 200) * price4
        }else{
            money = 50 * price1 + 50 * price2 + 100 * price3 + 150 * price4 + (kw - 350) * price5;
        }
        document.getElementById('txtResult_Bt2').innerHTML = "Họ và tên: " + name + ";" + " Tiền điện: " + money;
    }
}
