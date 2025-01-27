function stockcheck() {
    const stockinfo = document.getElementById("stockinfo");
    stockinfo.innerHTML = ""
    let stock = document.getElementById("stock").value;
    try {
        if (stock == "") throw "is Empty";
        if (isNaN(stock)) throw "is not a number";
        if (stock > 10) throw "too high"
        if (stock < 5) throw "too low"
    }
    catch(err) {
        stockinfo.innerHTML = "Input " + err
    }
    finally {
        document.getElementById("stockinfo").value = ""
    }
}