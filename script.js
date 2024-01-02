function cariProfil() {
    var namaGithub = document.querySelector('.search-profil').value;

    fetch('https://api.github.com/users/' + namaGithub)
        .then(response => {
            if (!response.ok) {
                throw new Error('User Github tidak ditemukan');
            }
            return response.json();
        })
        .then(data => {
            document.querySelector('.foto').src = data.avatar_url;
            document.querySelector('.nama-github').textContent = 'Nama Github: ' + data.login;
            document.querySelector('.repo').textContent = 'Jumlah Repository: ' + data.public_repos;
            document.querySelector('.follow').textContent = 'Followers: ' + data.followers;
            document.querySelector('.tgl-gabung').textContent = 'Tanggal Bergabung: ' + data.created_at.split('T')[0];

            Swal.fire({
                icon: 'success',
                title: 'Profil ditemukan!',
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(error => {
            console.error('Error:', error);

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message
            });
        });
}