# Realidade Aumentada Brasília 🌍✨

Projeto de Realidade Aumentada desenvolvido em **WebXR** com **Three.js** e **Vite**.

## 📋 Descrição

Uma aplicação web interativa que utiliza tecnologias de realidade aumentada (AR/XR) para visualizar conteúdo 3D em tempo real através do navegador.

## 🚀 Tecnologias Utilizadas

- **Three.js** - Biblioteca 3D para WebGL
- **WebXR** - API padrão para realidade aumentada e virtual
- **Vite** - Bundler e servidor de desenvolvimento
- **JavaScript (ES6+)** - Linguagem principal

## 📦 Instalação

### Pré-requisitos
- Node.js 14+ instalado

### Passos

1. Clone ou navegue até o diretório do projeto:
```bash
cd Realidade-Aumentada-Brasilia
```

2. Instale as dependências:
```bash
npm install
```

## 🎮 Como Usar

### Modo Desenvolvimento
Para iniciar o servidor de desenvolvimento com hot reload:
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:5173`

### Build para Produção
Para gerar a build otimizada:
```bash
npm run build
```

### Preview
Para visualizar a build de produção localmente:
```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
├── index.html          # Página principal com WebXR
├── marker.html         # Página para marcadores AR
├── package.json        # Configuração do projeto
├── vite.config.js      # Configuração do Vite
├── public/             # Arquivos estáticos
└── src/
    ├── main.js         # Script principal
    ├── counter.js      # Componente de contador
    └── style.css       # Estilos CSS
```

## 🎯 Funcionalidades Principais

- ✅ Ativação de sessão WebXR com um clique
- ✅ Renderização 3D com Three.js
- ✅ Integração com GLTFLoader para modelos 3D
- ✅ Iluminação dinâmica
- ✅ Interface responsiva

## 🔌 Compatibilidade

Esta aplicação requer um navegador com suporte a **WebXR**:
- Chrome 79+
- Edge 79+
- Firefox 55+
- Safari 12.2+ (em dispositivos compatíveis)

Para melhor experiência, use um dispositivo com suporte a AR nativo.

## 📝 Notas

- O projeto utiliza módulos ES6
- Certifique-se de acessar via `https://` ou `localhost` para utilizar WebXR
- Alguns navegadores podem exigir sinalizadores experimentais habilitados

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests

## 📄 Licença

Este projeto é fornecido como está para fins educacionais e de desenvolvimento.

---

**Desenvolvido com ❤️ para Brasília**
