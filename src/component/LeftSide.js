import { Row, Col, Form, Button } from 'react-bootstrap';
import Select from 'react-select'
import { ArrowDown } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RgetGameListFilter } from '../actions';

const options = [
    { value: 'Relase Date', label: 'Relase Date' },
    { value: 'Rating', label: 'Rating' },
    { value: 'Name', label: 'Name' },
]


export default function LeftSide() {

    const gameList = useSelector((state) => state.gameList);
    const gameListFilter = useSelector((state) => state.gameListFilter);
    const dispapch = useDispatch()


    const onChangeName = (e) => {
        dispapch(RgetGameListFilter({ ...gameListFilter, name: e.target.value }))
    }

    const onChangeRating = (e) => {
        if (e.target.value.length < 2) {
            dispapch(RgetGameListFilter({ ...gameListFilter, rating: e.target.value }))
        }
    }

    const onChangeOrderBy = (e) => {
        dispapch(RgetGameListFilter({ ...gameListFilter, orderBy: e.value }))

    }

    function onClickOrderType() {


        dispapch(RgetGameListFilter({ ...gameListFilter, orderType: !gameListFilter.orderType }))

    }
    function onClickClear() {

        dispapch(RgetGameListFilter(
            {
                ...gameListFilter,
                name: "",
                rating: 0,
                orderBy: "Relase Date",
                orderType: true
            }
        ))

    }

    return (
        <Row className="card_panel_bg py-4">

            <h6 className="ml-3 font-size-5 mb-4 pb-3 select">Filter Results</h6>

            <Col xs="12" >
                <Form.Group>
                    <Form.Label>Name (contains)</Form.Label>
                    <Form.Control
                        type="text"
                        value={gameListFilter.name}
                        onChange={onChangeName}
                        placeholder="Text string"
                    />
                </Form.Group>
            </Col>
            <Col sm="4" md="4" lg="12" >
                <Form.Group>
                    <Form.Label>Minimum score </Form.Label>
                    <Form.Control
                        type="number"
                        value={gameListFilter.rating == 0 ? "" : gameListFilter.rating}
                        onChange={onChangeRating}
                        placeholder="1 - 10"
                    />
                </Form.Group>
            </Col>
            <Col sm="6" md="6" lg="12"  >
                <Form.Group>
                    <Form.Label>Order By</Form.Label>
                    <Button className={gameListFilter.orderType ? "rotate  rotate_down" : "rotate  rotate_up"} onClick={onClickOrderType} >
                        <ArrowDown />
                    </Button>
                    <Select
                        options={options}
                        className="select"
                        value={{ value: gameListFilter.orderBy, label: gameListFilter.orderBy }}
                        onChange={onChangeOrderBy}
                    />
                </Form.Group>
            </Col>
            <Col sm="2" md="2" lg="12" >
                <Button className="clear_btn float-right" onClick={onClickClear}>
                    Clear
                </Button>
            </Col>
        </Row>
    )
}