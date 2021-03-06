import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Layout, Row, Col, Button } from 'antd';


export default function ProfilePolice() {
    const { Header, Footer, Sider, Content } = Layout
    const URL = 'http://127.0.0.1:3333'
    const [profile, setProflie] = useState();
    const Router = useRouter()
    console.log(Router.query);

    const [showProfile, setShowProfile] = useState();

    const getNameById = async () => {
        try {
            let info = await axios.get(`${URL}` + '/get/' + Router.query.id)
            console.log(info);
            setProflie(Object.assign({}, { ...info.data, }))
        } catch (error) {
            console.log(error);
        }
    }

    const getCivilyear = () => {
        if (profile.civil_year && profile.civil_history) {
            const years = profile.civil_year.split(';')
            const History = profile.civil_history.split(';')
            return years.map((item, index) => {
                return (

                    <div style={{ margin: '10px 0px ' }}>
                        <Row justify="center"  >
                            <Col span={5}>
                                <h3>{item}</h3>
                            </Col >
                            <Col span={9} ><h3>{History[index]}</h3></Col>
                        </Row>
                    </div>
                )
            })
        }
    }

    useEffect(() => {
        { getNameById() }

    }, [])

    return (
        <div style={{ padding: '100px' }}>
            {profile ?
                <div style={{ justifyContent: 'center', padding: '30px', height: '80vh', boxShadow: '1px 10px 20px 1px rgba(0,0,0,0.5)' }}>
                    <h1 style={{ marginBottom: '30px', textAlign: 'center' }}><b>ประวัติ</b></h1>
                    <div style={{ margin: '10px 0px ' }}>
                        <Row justify="center"  >
                            <Col span={6}>
                                <h3><b>ยศ ชื่อ-ชื่อสกุล </b></h3>
                            </Col >
                            <Col span={10} ><h3>{profile.rank + ' ' + profile.name + ' ' + profile.surname}</h3></Col>
                        </Row>

                    </div>
                    <div style={{ margin: '10px 0px ' }}>
                        <Row justify="center"  >
                            <Col span={6}>
                                <h3><b>ตำแหน่ง</b></h3>
                            </Col >
                            <Col span={10} ><h3>{profile.position}</h3></Col>
                        </Row>

                    </div>


                    <div style={{ margin: '10px 0px ' }}>
                        <Row justify="center"  >
                            <Col span={6}>
                                <h3><b>คุณวุฒิทางการศึกษา</b></h3>
                            </Col >
                            <Col span={10} ><h3>{profile.education}</h3></Col>
                        </Row>
                    </div>

                    <div style={{ margin: '10px 0px ' }}>
                        <Row justify="center"  >
                            <Col span={6}>
                                <h3><b>ประวัติรับราชการ</b></h3>
                            </Col >
                            <Col span={10}></Col>
                        </Row>
                    </div>

                    {getCivilyear()}
                    <div style={{ margin: '10px 0px ' }}>
                        <Row justify="center"  >
                            <Col span={6}>
                                <h3><b>ผลงาน</b></h3>
                            </Col >
                            <Col span={10} ><h3>{profile.reward}</h3></Col>
                        </Row>
                    </div>

                    <div style={{ margin: '10px 0px ' }}>
                        <Row justify="center"  >
                            <Col span={6}>
                                <h3><b>ขอรับตำแหน่งในตำแหน่งที่สูงขึ้น</b></h3>
                            </Col >
                            <Col span={10} ><h3>{profile.appoint}</h3></Col>
                        </Row>
                    </div>

                    <div style={{ margin: '10px 0px ' }}>
                        <Row justify="center"  >
                            <Col span={6}>
                                <h3><b>การฝึกอบรม</b></h3>
                            </Col >
                            <Col span={10} ><h3>{profile.training}</h3></Col>
                        </Row>
                    </div>

                    <div style={{ margin: '10px 0px ' }}>
                        <Row justify="center"  >
                            <Col span={6}>
                                <h3><b>หมายเลขโทรศัพท์</b></h3>
                            </Col >
                            <Col span={10} ><h3>{profile.telephone}</h3></Col>
                        </Row>
                    </div>
                    <div style={{ justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
                        <Button href='/list'>Back</Button>
                    </div>

                </div> : ''}

        </div>
    )
}
