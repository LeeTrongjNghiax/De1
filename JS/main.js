$(document).ready(() => {
  let i = 1;
  $("#doanTN").click(() => {
    $("#modal").modal();
  })

  kiemTraMaSinhVien = () => {
    let regex = /^\d{9}$/;
    let text = $("#maSinhVien").val();

    if (text == "") {
      $("#resultMaSinhVien").html("Không được để rỗng");
      document.querySelector("#resultMaSinhVien").removeAttribute("class", "text-success");
      document.querySelector("#resultMaSinhVien").setAttribute("class", "text-danger");
      return false;
    }
    if (regex.test(text) == false) {
      $("#resultMaSinhVien").html("Mã sinh viên có 9 chữ số");
      document.querySelector("#resultMaSinhVien").removeAttribute("class", "text-success");
      document.querySelector("#resultMaSinhVien").setAttribute("class", "text-danger");
      return false;
    }
    $("#resultMaSinhVien").html("Đúng");
    document.querySelector("#resultMaSinhVien").removeAttribute("class", "text-danger");
    document.querySelector("#resultMaSinhVien").setAttribute("class", "text-success");
    return true;
  }
  $("#maSinhVien").blur(kiemTraMaSinhVien);



  kiemTraHoTen = () => {
    let regex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/;
    let text = $("#hoTen").val();

    if (text == "") {
      $("#resultHoTen").html("Không được để rỗng");
      document.querySelector("#resultHoTen").removeAttribute("class", "text-success");
      document.querySelector("#resultHoTen").setAttribute("class", "text-danger");
      return false;
    }
    if (regex.test(text) == false) {
      $("#resultHoTen").html("Họ tên không hợp lệ");
      document.querySelector("#resultHoTen").removeAttribute("class", "text-success");
      document.querySelector("#resultHoTen").setAttribute("class", "text-danger");
      return false;
    }
    $("#resultHoTen").html("Đúng");
    document.querySelector("#resultHoTen").removeAttribute("class", "text-danger");
    document.querySelector("#resultHoTen").setAttribute("class", "text-success");
    return true;
  }
  $("#hoTen").blur(kiemTraHoTen);



  kiemTraEmail = () => {
    let regex = /^.{6}@iuh\.edu\.vn$/;
    let text = $("#email").val();

    if (text == "") {
      $("#resultEmail").html("Không được để rỗng");
      document.querySelector("#resultEmail").removeAttribute("class", "text-success");
      document.querySelector("#resultEmail").setAttribute("class", "text-danger");
      return false;
    }
    if (regex.test(text) == false) {
      $("#resultEmail").html("Email phải theo cú pháp xxxxxx@iuh.edu.vn");
      document.querySelector("#resultEmail").removeAttribute("class", "text-success");
      document.querySelector("#resultEmail").setAttribute("class", "text-danger");
      return false;
    }
    $("#resultEmail").html("Đúng");
    document.querySelector("#resultEmail").removeAttribute("class", "text-danger");
      document.querySelector("#resultEmail").setAttribute("class", "text-success");
    return true;
  }
  $("#email").blur(kiemTraEmail);



  actionDangKy = () => {
    if (
      kiemTraMaSinhVien() &&
      kiemTraHoTen() &&
      kiemTraEmail()
    ) {
      $("#table > tbody").append(`
        <tr>
          <td>${i++}</td>
          <td>${$("#maSinhVien").val()}</td>
          <td>${$("#hoTen").val()}</td>
          <td>${$("input[name=gioiTinh]:checked").val()}</td>
          <td>${
            $('input[name=nangKhieu]:checked').map(
              (i, e) => {
                return e.value
              }
            ).toArray()
          }</td>
          <td>${$("#email").val()}</td>
          <td>${$("select[name=thanhPho]").val()}</td>
        </tr>`
      );
      document.querySelector("#btnDangKy").setAttribute("data-dismiss", "modal");
    } 
  }
  $("#btnDangKy").click(actionDangKy);
})