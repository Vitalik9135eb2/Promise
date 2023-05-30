const api = {
    sendStudentsCountToItKamasutra(studentsCount) {
        return axios.post("https://it-kamasutra.com/students-need", 
        { count: studentsCount });
    },
    getVacanciesCountFromMicrosoft() {
        return axios.get("https://microsoft.com")
        .then(res => {
            return res.data.vacancies
        })
    },
    getVacanciesCountFromGoogle() {
        return axios.get("https://google.com")
    .then(res => {
            return res.data.vacancies
        })
    }
}



// api.getVacanciesCountFromMicrosoft().then((res) => {
//     console.log(res.data);
// })
//
// api.getVacanciesCountFromGoogle().then((res) => {
//     console.log(res.data);
// })

// api.sendStudentsCountToItKamasutra(20).then((res) => {
//     console.log(res.data);
// })



// const msPromise = api.getVacanciesCountFromMicrosoft()
// const gPromise = api.getVacanciesCountFromGoogle()
//
// const allPromise= Promise.all([msPromise,gPromise])
//
//  allPromise.then(res =>{
//      const resMsPromise = res[0]
//      const resGPromise = res[1]
//
//      api.sendStudentsCountToItKamasutra(resMsPromise + resGPromise ).then((res) => {
//          console.log(res.data);
//      })
//  })



// let countVacancies;
//
// const msPromise = api.getVacanciesCountFromMicrosoft()
//     .then(msPromise => {
//         countVacancies = msPromise
//         return api.getVacanciesCountFromGoogle()
//     })
//     .then(gPromise => {
//         return api.sendStudentsCountToItKamasutra(countVacancies + gPromise ).then((res) => {
//             console.log(res.data);
//         })
//     })



async function loadVacancies() {
    const msPromise = await api.getVacanciesCountFromMicrosoft()
    console.log(msPromise);

    const gPromise = await api.getVacanciesCountFromGoogle()
    console.log(gPromise);

    const resp = await api.sendStudentsCountToItKamasutra(msPromise + gPromise )
    console.log(resp.data);
}

loadVacancies()


async function loadVacanciesParallel() {
    const msPromise = api.getVacanciesCountFromMicrosoft()
    console.log(msPromise);

    const gPromise = api.getVacanciesCountFromGoogle()
    console.log(gPromise);

    const overallResult = await Promise.all([msPromise,gPromise])

    const resp = await api.sendStudentsCountToItKamasutra(overallResult[0] + overallResult[1] )
    console.log(resp.data);
}

loadVacanciesParallel()