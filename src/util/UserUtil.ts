export function getDiscordUser(username: string): string {
  switch (username) {
    case "fslatam":
    case "Andres Galvan":
      return "<@1156227375504302200>";
    case "CRISTIAN CAMILO MARTINEZ MACIA":
      return "<@977710003819511849>";
    case "Luis Manuel Diaz":
      return "<@753091843293577306>";
    case "Raúl Castillejo":
      return "<@1156228072232718436>";
    case "Ismael Centeno":
      return "<@1156227448543924314>";
    case "Jhonatan Martinez Muñoz":
      return "<@407007549406052383>";
    case "Orlando Arrieta":
      return "<@1156224960113692734>";
    case "it":
      return "<@1156248932305870981>";
    default:
      return username;
  }
}
