// * = Auto ID
// Permission:
// ---Executive
// ---Management
// ---General


data languages = {
    ja: {
        locale: "JP"
    },
    en-us: {
        locale: "US"
    }
}

data companies = {
    *: {
        language: "ja or en-us",
        description: "",
        name: "",
        headquarters: {
            postalCode: ["",""],
            prefecture: "",
            city: "",
            address: "",
            building: ""
        },
        phone: {
            f: "", // first code
            m: "", // middle code
            l: "", // last code
        }
    }
}

data histories = {
}

data people = {
    *: {
        language: "ja or en-us",
        user: false,
        firstName: "",
        lastName: "",
        title: "",
        roles: ["",""],
        affiliation: "",
        email: "",
        phone: "",
    }
}
data projects = {
}
data tasks = {
}
data settings = {
}
data schedules = {
}
