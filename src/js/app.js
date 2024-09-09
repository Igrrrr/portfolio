import { techStackIcons, card } from "./modules/data.js";

const techStackList = document.querySelector(".tech-stack__icons");
const projectCards = document.querySelector(".project__cards");

techStackIcons.forEach((icon) => {
  const img = document.createElement("img");
  const [alt, src] = Object.entries(icon)[0];
  img.src = `./img/${src}`;
  img.alt = alt;
  techStackList.appendChild(img);
});

card.forEach((el) => {
  const container = document.createElement("div");
  container.className = "card";

  const picture = document.createElement("img");
  picture.className = "card__image";
  picture.src = `./img/${el.image}`;
  picture.alt = el.alt;

  const content = document.createElement("div");
  content.className = "card__content";

  const contentTitle = document.createElement("h2");
  contentTitle.className = "card__title";
  contentTitle.textContent = el.title;

  const contentDescription = document.createElement("h3");
  contentDescription.className = "card__description";
  contentDescription.textContent = el.description;

  const techStack = document.createElement("h3");
  techStack.className = "card__skills";
  techStack.innerHTML = `<b>Tech stack :</b> ${el.skills}`;

  const linksWrapper = document.createElement("div");
  linksWrapper.className = "card__links";

  const linkChainWrapper = document.createElement("div");
  linkChainWrapper.className = "card__link";

  const linkChain = document.createElement("a");
  linkChain.className = "card__icon-link";
  linkChain.href = "/";

  const linkChainPicture = document.createElement("img");
  linkChainPicture.src = "./img/chainblack.svg";
  linkChainPicture.alt = "link-chain";
  linkChainPicture.className = "card__icon-picture";

  linkChain.appendChild(linkChainPicture);

  const linkChainText = document.createElement("a");
  linkChainText.className = "card__text-link";
  linkChainText.href = "/";
  linkChainText.textContent = "Live Preview";

  linkChainWrapper.appendChild(linkChain);
  linkChainWrapper.appendChild(linkChainText);

  const linkGithubWrapper = document.createElement("div");
  linkGithubWrapper.className = "card__link";

  const linkGithub = document.createElement("a");
  linkGithub.href = "/";

  const linkGithubPicture = document.createElement("img");
  linkGithubPicture.src = "./img/ghblack.svg";
  linkGithubPicture.alt = "link-github";
  linkGithubPicture.className = "card__icon-picture";

  linkGithub.appendChild(linkGithubPicture);

  const linkGithubText = document.createElement("a");
  linkGithubText.className = "card__text-link";
  linkGithubText.href = "/";
  linkGithubText.textContent = "View Code";

  linkGithubWrapper.appendChild(linkGithub);
  linkGithubWrapper.appendChild(linkGithubText);

  linksWrapper.appendChild(linkChainWrapper);
  linksWrapper.appendChild(linkGithubWrapper);

  content.appendChild(contentTitle);
  content.appendChild(contentDescription);
  content.appendChild(techStack);
  content.appendChild(linksWrapper);

  container.appendChild(picture);
  container.appendChild(content);

  projectCards && projectCards.appendChild(container);
});
