import React, { FC, useEffect, useState } from 'react';
import EventCalendar from './../compenents/EventCalendar';
import { Layout, Row, Button, Modal } from 'antd';
import EventForm from './../compenents/EventForm';

const Event: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        //запрос на получения событий
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleAddNewEvent = () => {
        setIsModalOpen(false);
    };
    return (
        <Layout>
            <EventCalendar />
            <Row justify="center">
                <Button onClick={showModal} type="primary">
                    Добавить событие
                </Button>
            </Row>
            <Modal
                footer={null}
                title="Добавить событе"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}>
                <EventForm submit={handleAddNewEvent} />
            </Modal>
        </Layout>
    );
};

export default Event;
