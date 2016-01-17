var isOnDrag = false;
var pieceIdOnDrag = "";

function debug(msg) {
    document.getElementById("debug").innerHTML = msg + "<br/>";
}

function inicializaTabuleiro() {
    //alert("InicializaTabuleiro");
    for (i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if(i <= 1 || i >= 6) {
                document.getElementById(getPieceId(i+1,j+1)).style.visibility = "visible";
                //alert("show " + getPieceId(i+1,j+1));
            }
            else {
                document.getElementById(getPieceId(i+1,j+1)).style.visibility = "hidden";
                //alert("hide " + getPieceId(i+1,j+1));
            }
        }
    }
}

function getPieceId(row, column)
{
    return row + String.fromCharCode("a".charCodeAt() + column - 1);
}

function startDrag(image) {
    //alert("teste");
    
    if(!isOnDrag)
    {
        isOnDrag = true;
        pieceIdOnDrag = image.id;
        document.getElementById(image.id).style.visibility = "hidden";
    }
}

function drag_start(e) {
    //debug("Arrastando o objeto " + e.target.getAttribute('id'));
    debug(e.target.parentElement.getAttribute('id'));


    e.dataTransfer.dropEffect = "move"; // aplica o efeito 'move'
    e.dataTransfer.setData("text/plain", e.target.getAttribute('id')); // manda o dado 'id' para o dataTransfer
}

function drag_end(e) {

}

function drag_drop(e)
{
    debug("teste");
    var element = e.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(element));
}
