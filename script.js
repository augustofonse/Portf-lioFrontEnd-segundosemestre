// selecione todos os links da lista de paginação
const links = document.querySelectorAll('list-menu');

// para cada link, adicione um evento de clique
links.forEach(link => {
  link.addEventListener('click', e => {
    // previne o comportamento padrão do clique de um link
    e.preventDefault();

    // seleciona o elemento da seção correspondente usando o atributo href do link
    const target = document.querySelector(link.getAttribute('href'));

    // rola a página até a seção correspondente
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
