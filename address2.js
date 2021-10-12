function calculate() {
    p = document.getElementById("p").value;
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    a = document.getElementById("a").value;
    result = document.getElementById("result");
    var rd = r / 100;
    var mr = rd / 12;
    var te = (1 + mr);
    m = n * 12;
    res = p;
    inter = 0;
    for (i = 0; i < m; i++) {
        holding_bi = Number(res) + Number(a);
        res = Number(holding_bi) * (1 + Number(mr));
        inter = Number(inter) + ((Number(holding_bi) * (1 + Number(mr))) - Number(holding_bi));
    }
    res = res.toFixed(2); inter = inter.toFixed(2);
    result.innerHTML = "The interest is :" + inter;
}