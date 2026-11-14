// Ancienne adresse d'ARBOS (…github.io/work-app/) : redirige vers les nouvelles adresses.
//  - liens envoyés aux clients et aux équipiers (signature, rapport, invitation) : tout de suite vers app.arbos.fr ;
//  - ancien site de présentation et démo : vers arbos.fr ;
//  - application : page « ARBOS a déménagé » (l'icône de l'écran d'accueil doit être remise).
(function () {
  var APP = 'https://app.arbos.fr';
  var SITE = 'https://arbos.fr';
  var p = location.pathname;
  var rest = p.indexOf('/work-app') === 0 ? p.slice('/work-app'.length) : null;
  var go = function (u) { location.replace(u + location.hash); };
  if (rest === null) return go(SITE + '/');
  if (/^\/(signer|rapport|invitation)\/[^/]+\/?$/.test(rest)) return go(APP + rest + location.search);
  if (/^\/(connexion|mot-de-passe)\/?$/.test(rest)) return go(APP + rest + location.search);
  if (/^\/demo(\/|$)/.test(rest)) return go(SITE + '/demo/');
  if (/^\/decouvrir(\/|$)/.test(rest)) return go(SITE + (/mentions/.test(rest) ? '/mentions.html' : '/'));
  document.documentElement.className = 'moved';
})();
