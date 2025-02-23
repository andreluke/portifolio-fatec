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

  $(".project-content").click(function () {
    $(this).find("p").toggleClass("expanded");
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

  function calcularSemestre(dataIngresso) {
    const hoje = new Date();
    const ingresso = new Date(dataIngresso);
    let semestre = Math.floor((hoje.getFullYear() - ingresso.getFullYear()) * 2 + (hoje.getMonth() + 1) / 6);
    
    if (semestre < 6) {
        return `${semestre + 1}° semestre`;
    } else {
        return "Concluído";
    }
}

  // Define a idade no HTML

  $("#conclusao").text(calcularSemestre("2023-02-01"));
  $("#idade").text(`Idade: ${calcularIdade("2005-06-27")} anos`);
});
