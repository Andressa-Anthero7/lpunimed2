
$(document).ready(function(){
    $(document).on('keyup','#nome, #whatsapp', function(){
        nome_digitado = $("#nome").val();
        whatsapp_digitado = $("#whatsapp").val();
        //se nome maior que 3 letras e numero maior igual a 10 vai liberar o aceita termos
        if(nome_digitado.length >= 3 && whatsapp_digitado.length >= 10){
            $("#aceito-termos").removeAttr('disabled');
        }
        if(whatsapp_digitado.length == 3){
            //alert('maior que 2 digitos')
            whatsapp_digitado = '(' + whatsapp_digitado.slice(0, 2) + ') ' + whatsapp_digitado.slice(2);
            $("#whatsapp").val(whatsapp_digitado);
        }
        document.getElementById("whatsapp").addEventListener("input", function (e) {
            let v = this.value.replace(/\D/g, ""); // Remove não numéricos
            if (v.length > 11) v = v.slice(0, 11); // Limita a 11 dígitos
            v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3"); // Formata (XX) XXXXX-XXXX
            this.value = v;
        });
    })

    $(document).on('click','#aceito-termos',function(){
       $("#btn-enviar").removeAttr('disabled').removeClass('btn-blink');
    })
})




