import Axios from "axios"
export const RgetGameList = () => async dispapch => {

    await Axios.get("https://public.connectnow.org.uk/applicant-test/")
        .then(res => {
            dispapch({
                type: "GET_GAME_LIST",
                payload: res.data
            })
        })
        .catch((err) => {
            dispapch({
                type: "GET_GAME_LIST_ERROR",
                payload: "Can not list:" + err
            })
        })

}

export const RgetGameListFilter = (data) => dispapch => {

    dispapch({
        type: "GET_FILTER",
        payload: data
    })


}

