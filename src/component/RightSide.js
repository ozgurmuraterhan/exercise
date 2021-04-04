import { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { RgetGameList, RgetGameListFilter } from '../actions';


export default function RightSide() {

    useEffect(() => {
        setTimeout(function () {
            dispapch(RgetGameList())
        }, 2000);

    }, []);


    const gameList = useSelector((state) => state.gameList);
    const gameListFilter = useSelector((state) => state.gameListFilter);
    const dispapch = useDispatch()

    let myArr = gameList
    if (gameListFilter.name != null) {
        myArr = myArr.filter(x => x.name.toLowerCase().includes(gameListFilter.name.toLowerCase()))
    }
    if (gameListFilter.rating != 0) {
        myArr = myArr.filter(x => Number(Number(x.rating) / 10).toFixed(0) >= Number(gameListFilter.rating))

    }
    if (gameListFilter.orderBy == "Relase Date") {
        if (gameListFilter.orderType == true) {
            myArr = myArr.sort((a, b) => (a.first_release_date > b.first_release_date) ? 1 : -1)
        } else {
            myArr = myArr.sort((a, b) => (a.first_release_date > b.first_release_date) ? -1 : 1)
        }
    }
    if (gameListFilter.orderBy == "Rating") {
        if (gameListFilter.orderType == true) {
            myArr = myArr.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
        } else {
            myArr = myArr.sort((a, b) => (a.rating > b.rating) ? -1 : 1)
        }
    }
    if (gameListFilter.orderBy == "Name") {
        if (gameListFilter.orderType == true) {
            myArr = myArr.sort((a, b) => (a.name > b.name) ? 1 : -1)
        } else {
            myArr = myArr.sort((a, b) => (a.name > b.name) ? -1 : 1)
        }
    }


    return (

        myArr.map(res =>

        (
            <Row className="row_item" key={res.id} >
                <span className="special_absolute">{Number(res.rating / 10).toFixed(0)} </span>
                <Col md="2" sm="12" className="img_area p-0 p-sm-r-0 pl-lg-3" >
                    <div className="img"></div>
                </Col>
                <Col md="10" sm="12" className="item_box">
                    <h1>{res.name}</h1>
                    <h6>Relase Date: {moment(res.first_release_date).format("DD/MM/YYYY")}</h6>
                    <Col md={11} className="mx-0 px-0">
                        {res.summary.substring(0, 255)}...
                </Col>
                </Col>
            </Row >
        )
        )

    )
}