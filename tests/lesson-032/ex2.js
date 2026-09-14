let chieuCao = 185;
let soLe = chieuCao % 100;
let canNangLyTuong = (soLe * 9)/10;
let canNangToiDa = soLe;
let canNangToiThieu = (soLe * 8)/10;
if (100 < chieuCao < 200) {
    console.log ("Cân nặng lý tưởng của bạn là:" + canNangLyTuong + "\nCân nặng tối đa là:" + canNangToiDa + "\nCân nặng tối thiểu là:" + canNangToiThieu);
}