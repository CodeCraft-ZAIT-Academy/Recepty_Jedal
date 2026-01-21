    // Zoznam všetkých receptov
const recipes = [
    'Bryndzove_halusky.html',
    'Kapustnica.html',
    'Pirohy_s_bryndzou.html',
    'Segedinsky_gulas.html',
    'Zemiakove_placky.html',
    'Sulance_s_makom.html',
    'Vyprazany_rezen.html',
    'Lievance.html',
    'Kuraci_paprikas.html',
    'Klobasa_s_kapustou.html',
    'Gulas.html',
    'Zemiakovy_privarok.html'
];

// Otvorenie náhodného receptu
function openRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    window.location.href = recipes[randomIndex];
}

// Otvorenie modálu
function openModal() {
    document.getElementById('recipeModal').style.display = 'block';
}

// Zatvorenie modálu
function closeModal() {
    document.getElementById('recipeModal').style.display = 'none';
}

// Zatvorenie detailného modálu
function closeDetailModal() {
    document.getElementById('detailModal').style.display = 'none';
}

// Automaticky zavri sidebar keď klikneš na filter na mobile
document.querySelectorAll('.filter-link').forEach(link => {
    link.addEventListener('click', function() {
        // Zavri sidebar na mobile
        if (window.innerWidth <= 768) {
            document.getElementById('sidebar-toggle').checked = false;
        }
    });
});

// Zavri modál keď klikneš mimo nho
window.onclick = function(event) {
    const modal = document.getElementById('recipeModal');
    const detailModal = document.getElementById('detailModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
    if (event.target == detailModal) {
        detailModal.style.display = 'none';
    }
}
