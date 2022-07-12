import {
  STARTBTN,
  CATEGORIES,
  CARD,
  WRAPPER,
  CARD_CONTENT,
  CARD_PAGE_WRAPPER,
  STATS_PAGE_WRAPPER,
  TABLE
} from "./dom-elements";
import { statsContent } from "./stats";
import { header } from "./header";
import { starter } from "./starter";
import { cardsPage } from "./cards-page";
import { toggleModes } from "./toggle-mode";

// starter page
if (location.href === "https://ana-kobakhidze.github.io/english-for-kids/index.html") {
  WRAPPER.insertBefore(header(), WRAPPER.firstChild);
  CARD_CONTENT.appendChild(starter());
  STARTBTN.addEventListener("click", () => {
    STARTBTN.style.display = "none";
    CATEGORIES.style.display = "flex";
  });
  toggleModes();
}

/// cards page
if (location.href === "https://ana-kobakhidze.github.io/english-for-kids/index-cards.html") {
  CARD_PAGE_WRAPPER.insertBefore(header(), CARD_PAGE_WRAPPER.firstChild);
  toggleModes();
  CARD.appendChild(cardsPage());
}
/// stats page
if (location.href ===  "https://ana-kobakhidze.github.io/english-for-kids/statistics.html") {
  STATS_PAGE_WRAPPER.insertBefore(header(), STATS_PAGE_WRAPPER.firstChild);
  TABLE.appendChild(statsContent());
  toggleModes();
}
