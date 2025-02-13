$(document).ready(function () {
  $(".info-toggle").click(function () {
    $(".info").slideToggle(300);
    $(this).find("i").toggleClass("fa-chevron-down fa-chevron-up");
  });

  $(".sidebar-toggle").click(function () {
    $(".sidebar").toggleClass("hidden");
  });

  $(".menu button").click(function () {
    if ($(this).hasClass("sidebar-toggle")) {
        return;
      }

    var target = $(this).data("target");
    $(".section").removeClass("active");
    $("#" + target).addClass("active");
  });

  function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    if (
      mesAtual < nascimento.getMonth() ||
      (mesAtual === nascimento.getMonth() && diaAtual < nascimento.getDate())
    ) {
      idade--; // Ainda não fez aniversário este ano
    }
    return idade;
  }

  // Define a idade no HTML
  $("#idade").text(`Idade: ${calcularIdade("2005-06-27")} anos`);
});
