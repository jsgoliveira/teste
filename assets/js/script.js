function ativaSisteminhaUwU() {
    swal({
            title: "",
            text: "Eu",
            icon: "info",
            dangerMode: true,
        })
        .then((botaoFoiClicado) => {
            swal({
                    title: "",
                    text: "Gosto muito",
                    icon: "info",
                    dangerMode: true,
                })
                .then((botaoFoiClicado) => {
                    swal({
                            title: "",
                            text: "de",
                            icon: "warning",
                            dangerMode: true,
                        })
                        .then((botaoFoiClicado) => {
                            swal({
                                    title: "",
                                    text: "você",
                                    icon: "warning",
                                    dangerMode: true,
                                })
                                .then((botaoFoiClicado) => {
                                    swal({
                                            title: "",
                                            text: "Cecília",
                                            icon: "warning",
                                            dangerMode: true,
                                        })
                                        .then((botaoFoiClicado) => {
                                            swal({
                                                    title: "",
                                                    text: "Vai dar certo",
                                                    buttons: true,
                                                })
                                                .then((botaoFoiClicado) => {
                                                    if (botaoFoiClicado) {
                                                        swal({
                                                                title: "",
                                                                text: "eu sei",
                                                                icon: "success",
                                                                buttons: true,
                                                            })
                                                            .then((botaoFoiClicado) => {
                                                                document.getElementById("imagem_principal").style.display = "block";
                                                            });
                                                    } else {
                                                        swal("", "não me ama (ￗ﹏ￗ ) (ￗ﹏ￗ ) (ￗ﹏ￗ )", "error");
                                                    }
                                                });
                                        });
                                });
                        });
                });
        });
}