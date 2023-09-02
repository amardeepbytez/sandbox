// var theme = {
//   init: function() {
//     theme.subMenu();
//   },
//   subMenu: () => {
//     (function($bs) {
//       const CLASS_NAME = 'has-child-dropdown-show';
//       $bs.Dropdown.prototype.toggle = function(_original) {
//           return function() {
//               document.querySelectorAll('.' + CLASS_NAME).forEach(function(e) {
//                   e.classList.remove(CLASS_NAME);
//               });
//               let dd = this._element.closest('.dropdown').parentNode.closest('.dropdown');
//               for (; dd && dd !== document; dd = dd.parentNode.closest('.dropdown')) {
//                   dd.classList.add(CLASS_NAME);
//               }
//               return _original.call(this);
//           }
//       }($bs.Dropdown.prototype.toggle);
//       document.querySelectorAll('.dropdown').forEach(function(dd) {
//           dd.addEventListener('hide.bs.dropdown', function(e) {
//               if (this.classList.contains(CLASS_NAME)) {
//                   this.classList.remove(CLASS_NAME);
//                   e.preventDefault();
//               }
//               e.stopPropagation();
//           });
//       });
//     })(bootstrap);
//   },
// }
// theme.init()