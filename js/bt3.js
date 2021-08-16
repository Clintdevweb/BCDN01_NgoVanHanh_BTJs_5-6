// Bài tập 3
/**
 * Khối 1 Input
 * Họ và tên
 * Tổng thu nhập năm
 * Số người phụ thuộc
 * 
 * Khối 2 Các bước xử lý
 * B1 Tìm thẻ html, lấy giá trị và tạo biến
 * name
 * income
 * people
 * Tạo biến ứng với thuế suất
 * const taxes1 = 5; 
 * const taxes2 = 10; 
 * const taxes3 = 15; 
 * const taxes4 = 20; 
 * const taxes5 = 25; 
 * const taxes6 = 30; 
 * const taxes7 = 35; 
 * B2 Xây dựng công thức tính 
 * Thu nhập chịu thuế (incomeTaxes) = Tổng thu nhập năm(income) - 4tr - Số người phụ thuộc(people) * 1.6tr
 * B3 Xét các trường hợp
 * Th1 incomeTaxes <= 60tr && incomeTaxes > 0
 * Thuế (taxes) = incomeTaxes * taxes1;
 * 
 * Th2 incomeTaxes <= 120tr && incomeTaxes > 60tr
 * Thuế (taxes) = incomeTaxes * taxes2;
 * 
 * Th3 incomeTaxes <= 210tr && incomeTaxes > 120tr
 * Thuế (taxes) = incomeTaxes * taxes3;
 * 
 * Th4 incomeTaxes <= 384tr && incomeTaxes > 210tr
 * Thuế (taxes) = incomeTaxes * taxes4;
 * 
 * Th5 incomeTaxes <= 624tr && incomeTaxes > 384tr
 * Thuế (taxes) = incomeTaxes * taxes5;
 * 
 * Th6 incomeTaxes <= 960tr && incomeTaxes > 624tr
 * Thuế (taxes) = incomeTaxes * taxes6;
 * 
 * Th7 incomeTaxes > 960tr
 * Thuế (taxes) = incomeTaxes * taxes7;
 * 
 * B4 Hiển thị UI
 * 
 * Khối 3 Output
 * Xuất họ và tên kèm Tiền thuế thu nhập cá nhân
 */

// Khai báo hàm
function tienThueCaNhan(){
    // Tạo biến
    const taxes1 = 0.05; 
    const taxes2 = 0.1; 
    const taxes3 = 0.15; 
    const taxes4 = 0.2; 
    const taxes5 = 0.25; 
    const taxes6 = 0.3; 
    const taxes7 = 0.35;
    
    var name = document.getElementById('name2').value;
    var income = parseInt(document.getElementById('inputIncome').value);
    var people = parseInt(document.getElementById('inputPeople').value);
    var incomeTaxes = income - 4000000 - people * 1600000;
    var taxes = 0;
    // Xét trường hợp
    if(people < 0 || incomeTaxes < 0 ){
        document.getElementById('txtResult_Bt3').innerHTML = "Số người không hợp lệ hoặc thu nhập của bạn quá thấp để tính"
        
    }else{
        if(incomeTaxes <= 6e6 && incomeTaxes > 0){
            taxes = incomeTaxes * taxes1;
        }else if (incomeTaxes <= 120000000 && incomeTaxes > 60000000){
            taxes = incomeTaxes * taxes2;
        }else if (incomeTaxes <= 210000000 && incomeTaxes > 120000000){
            taxes = incomeTaxes * taxes3;
        }else if (incomeTaxes <= 384000000 && incomeTaxes > 210000000){
            taxes = incomeTaxes * taxes4;
        }else if (incomeTaxes <= 624000000 && incomeTaxes > 384000000){
            taxes = incomeTaxes * taxes5;
        }else if (incomeTaxes <= 960000000 && incomeTaxes > 624000000){
            taxes = incomeTaxes * taxes6;
        }else{
            taxes = incomeTaxes * taxes7;
        }
        document.getElementById('txtResult_Bt3').innerHTML = "Họ và tên: " + name +"; " + " Tiền thuế thu nhập cá nhân: " + taxes + " VND";
    }
}

document.getElementById('CalBtn_Bt3').onclick = tienThueCaNhan;
