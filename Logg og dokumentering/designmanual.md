
# Designmanual

Denne designmanualen beskriver stilreglene for et nettsted, basert på det tilhørende CSS-dokumentet.

## Typografi

- **Font:** Arial, sans-serif
- **Farge:** #333 (mørk grå)
- **Avsnitt:** Linjeavstand 1.5–1.6, fontstørrelse 1.2rem

## Layout og Bakgrunn

- **Body:**
  - Sentrert tekst og innhold
  - Bakgrunn: Gradient fra #e0f7fa til #b3e5fc (lyseblåtoner)
  - Flexbox med kolonne-retning
  - Padding: 2vh 2%
  - Minste høyde: 100vh

## Header og Navigasjon

- **Header:**
  - Bredde: 100%
  - Bakgrunn: #007acc (blå)
  - Padding: 2vh 0
  - Border-radius: 5vh

## Logo

- **Logo-container:** Flexbox, sentrert horisontalt og vertikalt, margin-bottom: 3vh
- **Logo:** Bredde: 8vw, margin-right: 1em


### Tekst

- **H2:** 2rem, farge: #007acc, margin-bottom: 2vh
- **P:** 1.2rem, linjeavstand 1.6, margin-bottom: 2vh
- **H3:** 1.5rem, farge: #007acc, margin-top: 3vh
- **Lenker:** #007acc, underline ved hover

### Værcontainer (#weather-container)

- Bakgrunn: hvit
- Padding: 5vh
- Border-radius: 2em
- Bredde: 90%, maks 25em
- Skygge: dobbelt med lysrefleks
- Hover-effekt: løftes med translateY

- **Ikon (#weather-icon):** Bredde: 20vw, maks 8em, margin: 2vh 0

## Responsivt Design (max-width: 600px)

- **H1:** 1.3rem
- **Værcontainer:** 90% bredde
- **Logo-container:** kolonne-retning, mindre margin
- **Logo:** ingen margin-right, legger til margin-bottom
- **Navigasjon:** kolonne-retning, 3vh gap mellom lenker
