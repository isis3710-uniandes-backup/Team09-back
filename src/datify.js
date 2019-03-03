function pad2(n) {  // always returns a string
    return (n < 10 ? '0' : '') + n;
}

function getDate() {
    d = new Date();
    var yyyy = this.getFullYear().toString();
    var MM = pad2(this.getMonth() + 1);
    var dd = pad2(this.getDate());
    var hh = pad2(this.getHours());
    var mm = pad2(this.getMinutes());
    var ss = pad2(this.getSeconds());
    return `${yyyy}-${MM}-${dd} ${hh}:${mm}:${ss}`;
}
