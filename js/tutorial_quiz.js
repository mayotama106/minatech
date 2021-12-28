function toggle_answear(x) {
  if (document.getElementById("check_" + x).style.display === "none") {
    document.getElementById("check_" +x).style.display = "block";
    document.getElementById("check_btn_" +x).textContent = "答え非表示";
    document.getElementById("check_btn_" +x).style.background = "#bbb";
    document.getElementById("check_btn_" +x).style.color = "#333";
  } else {
    document.getElementById("check_" +x).style.display = "none";
    document.getElementById("check_btn_" +x).textContent = "答え合わせ";
    document.getElementById("check_btn_" +x).style.background = "#04AA6D";
    document.getElementById("check_btn_" +x).style.color = "#fff";
  }
}