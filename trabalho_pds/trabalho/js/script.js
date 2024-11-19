// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Variáveis globais
    const telaLogin = document.getElementById('tela-login');
    const telaDashboard = document.getElementById('tela-dashboard');
    const formLogin = document.getElementById('form-login');
    const linkCadastrar = document.getElementById('link-cadastrar');
    const navbarToggler = document.getElementById('navbar-toggler');
    const sidebar = document.getElementById('sidebarMenu');
    const overlay = document.getElementById('overlay');
    const sair = document.getElementById('sair');
    const menuItems = document.querySelectorAll('.nav-link[data-tela]');
    const conteudoDinamico = document.getElementById('conteudo-dinamico');
    const tituloPagina = document.getElementById('titulo-pagina');
  
    // Função para alternar visibilidade das telas
    function mostrarTela(tela) {
      telaLogin.style.display = 'none';
      telaDashboard.style.display = 'none';
  
      tela.style.display = 'block';
    }
  
    // Navegação entre telas de login e cadastro (simulado)
    linkCadastrar.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Funcionalidade de cadastro não implementada neste protótipo.');
    });
  
    // Simulação de login
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      mostrarTela(telaDashboard);
      carregarTela('resumo');
    });
  
    // Botão de toggle do menu lateral em dispositivos móveis
    navbarToggler.addEventListener('click', () => {
      sidebar.classList.toggle('show');
      overlay.classList.toggle('active');
    });
  
    // Fechar menu lateral ao clicar no overlay
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('show');
      overlay.classList.remove('active');
    });
  
    // Navegação no dashboard
    menuItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
  
        // Remover classe 'active' de todos os itens
        menuItems.forEach((el) => el.classList.remove('active'));
  
        // Adicionar classe 'active' ao item clicado
        item.classList.add('active');
  
        // Carregar conteúdo correspondente
        const tela = item.getAttribute('data-tela');
        carregarTela(tela);
  
        // Fechar o menu lateral em dispositivos móveis
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('show');
          overlay.classList.remove('active');
        }
      });
    });
  
    // Função para carregar o conteúdo das telas
    function carregarTela(tela) {
      conteudoDinamico.innerHTML = '';
      conteudoDinamico.classList.add('fade-in');
  
      // Atualizar título da página
      tituloPagina.textContent = document.querySelector(`a[data-tela="${tela}"]`).innerText;
  
      if (tela === 'resumo') {
        conteudoDinamico.innerHTML = `
          <h2>Resumo do Dia</h2>
          <!-- Conteúdo do resumo -->
          <div class="row">
            <div class="col-md-6">
              <div class="card mb-4 shadow-sm">
                <div class="card-header">
                  Próximos Atendimentos
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">10:00 - Paciente A</li>
                  <li class="list-group-item">11:00 - Paciente B</li>
                  <li class="list-group-item">14:00 - Paciente C</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card mb-4 shadow-sm">
                <div class="card-header">
                  Notificações
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Nova mensagem de Dr(a). Silva</li>
                  <li class="list-group-item">Atualização no protocolo XYZ</li>
                </ul>
              </div>
            </div>
          </div>
        `;
      } else if (tela === 'agenda') {
        conteudoDinamico.innerHTML = `
          <h2>Agenda</h2>
          <!-- Conteúdo da agenda -->
          <p>Aqui você pode visualizar e gerenciar seus compromissos.</p>
          <!-- Exemplo de tabela de compromissos -->
          <table class="table table-dark table-hover">
            <thead>
              <tr>
                <th>Horário</th>
                <th>Paciente</th>
                <th>Tipo de Consulta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10:00</td>
                <td>Paciente A</td>
                <td>Retorno</td>
              </tr>
              <tr>
                <td>11:00</td>
                <td>Paciente B</td>
                <td>Primeira Consulta</td>
              </tr>
              <!-- ... outros compromissos ... -->
            </tbody>
          </table>
        `;
      } else if (tela === 'prontuarios') {
        conteudoDinamico.innerHTML = `
          <h2>Prontuários</h2>
          <!-- Conteúdo dos prontuários -->
          <p>Aqui você pode acessar e editar os prontuários dos pacientes.</p>
          <!-- Exemplo de lista de pacientes -->
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Paciente A
              <button class="btn btn-sm btn-primary">Ver Prontuário</button>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Paciente B
              <button class="btn btn-sm btn-primary">Ver Prontuário</button>
            </li>
            <!-- ... outros pacientes ... -->
          </ul>
        `;
      } else if (tela === 'comunicacao') {
        conteudoDinamico.innerHTML = `
          <h2>Comunicação</h2>
          <!-- Conteúdo da comunicação -->
          <p>Aqui está o chat interno para comunicação segura entre profissionais.</p>
          <!-- Exemplo de área de chat -->
          <div class="chat-container">
            <!-- Mensagens -->
            <div class="chat-message">
              <strong>Dr(a). Silva:</strong> Olá, podemos discutir o caso do paciente X?
            </div>
            <!-- ... outras mensagens ... -->
            <!-- Campo de entrada -->
            <div class="mt-3">
              <input type="text" class="form-control" placeholder="Digite sua mensagem...">
            </div>
          </div>
        `;
      } else if (tela === 'protocolos') {
        conteudoDinamico.innerHTML = `
          <h2>Protocolos Clínicos</h2>
          <!-- Conteúdo dos protocolos -->
          <p>Aqui você pode acessar protocolos clínicos atualizados.</p>
          <!-- Exemplo de lista de protocolos -->
          <ul class="list-group">
            <li class="list-group-item">
              <a href="#">Protocolo de Atendimento de Emergência</a>
            </li>
            <li class="list-group-item">
              <a href="#">Guia de Prescrição de Medicamentos</a>
            </li>
            <!-- ... outros protocolos ... -->
          </ul>
        `;
      } else if (tela === 'financeiro') {
        conteudoDinamico.innerHTML = `
          <h2>Financeiro</h2>
          <!-- Conteúdo financeiro -->
          <p>Aqui você pode gerenciar suas finanças.</p>
          <!-- Exemplo de resumo financeiro -->
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Resumo Financeiro</h5>
              <p class="card-text">Receitas: R$ 10.000,00</p>
              <p class="card-text">Despesas: R$ 4.000,00</p>
              <p class="card-text">Saldo: R$ 6.000,00</p>
            </div>
          </div>
        `;
      } else if (tela === 'configuracoes') {
        conteudoDinamico.innerHTML = `
          <h2>Configurações</h2>
          <!-- Conteúdo das configurações -->
          <p>Aqui você pode ajustar suas preferências.</p>
          <!-- Exemplo de formulário de configurações -->
          <form>
            <div class="mb-3">
              <label for="notificacoes" class="form-label">Notificações</label>
              <select id="notificacoes" class="form-select">
                <option value="todas">Todas</option>
                <option value="somente-importantes">Somente importantes</option>
                <option value="nenhuma">Nenhuma</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="idioma" class="form-label">Idioma</label>
              <select id="idioma" class="form-select">
                <option value="pt-br">Português</option>
                <option value="en-us">Inglês</option>
                <!-- ... outros idiomas ... -->
              </select>
            </div>
            <button type="submit" class="btn btn-primary">Salvar Alterações</button>
          </form>
        `;
      }
  
      // Remover a classe de animação após a conclusão
      conteudoDinamico.addEventListener('animationend', () => {
        conteudoDinamico.classList.remove('fade-in');
      });
    }
  
    // Evento para o botão 'Sair'
    sair.addEventListener('click', (e) => {
      e.preventDefault();
      mostrarTela(telaLogin);
      conteudoDinamico.innerHTML = '';
      menuItems.forEach((el) => el.classList.remove('active'));
      sidebar.classList.remove('show');
      overlay.classList.remove('active');
    });
  
    // Inicializar na tela de login
    mostrarTela(telaLogin);
  });
  