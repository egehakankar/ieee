export function PostData(type) {
    let BaseURL = 'https://ieee.bilkent.edu.tr/ieeebackend/api/index.php';
    return new Promise((resolve, reject) => {
        fetch(BaseURL + '?tp=' + type, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then((response) => response.json()
                .then((res) => {
                    resolve(res);
                }))
            .catch((error) => {
                reject(error);
            });
    });
}

export function PostDataId(type, userData) {
    let BaseURL = 'https://ieee.bilkent.edu.tr/ieeebackend/api/index.php';
    return new Promise((resolve, reject) => {
        fetch(BaseURL + '?tp=' + type, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData),
            })
            .then((response) => response.json()
                .then((res) => {
                    resolve(res);
                }))
            .catch((error) => {
                reject(error);
            });
    });
}

export function PostDataPhotos(type, ids) {
    let BaseURL = 'https://ieee.bilkent.edu.tr/ieeebackend/api/index.php';
    return new Promise((resolve, reject) => {
        fetch(BaseURL + '?tp=' + type, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ids),
            })
            .then((response) => response.json()
                .then((res) => {
                    resolve(res);
                }))
            .catch((error) => {
                reject(error);
            });
    });
}

export function PostDataTeam(type) {
    let BaseURL = 'https://ieee.bilkent.edu.tr/ieeebackend/api/index.php';
    return new Promise((resolve, reject) => {
        fetch(BaseURL + '?tp=' + type, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then((response) => response.json()
                .then((res) => {
                    resolve(res);
                }))
            .catch((error) => {
                reject(error);
            });
    });
}