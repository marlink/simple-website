# Website Design Specification

## Design Style

- Minimal black-and-white theme with inverted contrast (white on black).
- Built using pure HTML5 and CSS — no external frameworks.
- Mobile-first approach: CSS structured from small to large viewports.
- Layouts are clean, spacious, and balanced, ensuring every element has sufficient visual breathing room.

## Top Navigation Bar

### Structure

Three columns in one row:

- **Left:** Company logo (use /img/mc-logo.svg file in img folder)
- **Center:** Horizontal list of navigation links
- **Right:** Call-to-action button labeled “Free audyt" (add chevron on the right, and add gentle animation of arrow on hover)

### Active Page Indicator

Highlight the current sub-page with a bright green underline or bottom border.
Links in top navbar: Home, Notes, AI Lab.
Links in footer: style guide, contact, blog, privacy policy, sign-up.
Index.html is a separate page displayed when logo in top navbar clicked and a default root too;
home.html is a separate page displayed when Home selected in menu in top navbar;
notes.html is a separate page displayed when Notes selected in menu in top navbar;
ai-lab.html is a separate page displayed when AI Lab selected in menu in top navbar;
Each sub-page is empty apart from a hero section allowing image in the background and hige heading in the middle between top navbar and footer;

### Dynamic Updates

When new sub-pages are added, the navigation automatically reflects them across all pages.
Any new page, section, component added - they should be reflected in style guide separate page that wioll list off the rules for all components like a demo.

### Sticky / Secondary Navbar

A duplicate navigation bar appears after the user scrolls 5% down the page, with a subtle delay or fade-in animation. If user keep scrolling down for a bit longer, the nevbar is will go away until    user starts scrolling up.

## Footer

Divided into four equal columns, each containing:

- A small heading
- A vertical list of 6 links (user lorem ipsum for all for now)
