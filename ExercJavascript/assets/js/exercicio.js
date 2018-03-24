$().ready( function()
{
    $("#descricao").load("info/de-ex01.txt");
    $("#resolucao").load("page/re-ex01.html");
} );

function carregarPagina(elmt)
{
    let id = parseInt( elmt );

    if( id == 1 )
    {
        $("#descricao").load("info/de-ex01.txt");
        $("#resolucao").load("page/re-ex01.html");
    }
    else if( id == 2 )
    {
        $("#descricao").load("info/de-ex02.txt");
        $("#resolucao").load("page/re-ex02.html");
    }
    else if( id == 3 )
    {
        $("#descricao").load("info/de-ex03.txt");
        $("#resolucao").load("page/re-ex03.html");
    }
    else
    {
        $("#descricao").load("info/de-ex04.txt");
        $("#resolucao").load("page/re-ex04.html");
    }
}