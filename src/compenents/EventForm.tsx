import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, DatePicker, DatePickerProps, Form, Input, Row } from 'antd';
import React, { FC, useState } from 'react';
import locale from 'antd/es/date-picker/locale/ru_RU';
import { IEvent } from './../models/IEvent';
import { useAppDispatch } from './../hooks/redux';
import { createEvent } from '../store/reducers/event/event';
import { formatDate } from '../utils/date';

interface EventFormProps {
  submit: () => void;
}
const EventForm: FC<EventFormProps> = ({ submit }) => {
  const [event, setEvent] = useState<IEvent>({ date: '', info: '' } as IEvent);
  const dispatch = useAppDispatch();
  const onFinish = () => {
    submit();
    dispatch(createEvent(event));
    console.log('Received values of form: ', event);
  };
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    if (date) setEvent({ ...event, date: formatDate(date?.toDate()) });
  };
  return (
    <Form name="normal_login" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item
        name="discriptionOfEvent"
        rules={[{ required: true, message: 'Поле должно быть заполненым!' }]}>
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Информация о событии"
          onChange={(e) => setEvent({ ...event, info: e.target.value })}
          value={event.info}
        />
      </Form.Item>
      <Form.Item
        name="dateOfEvent"
        rules={[{ required: true, message: 'Пожалуйста введите дату!' }]}>
        <DatePicker locale={locale} onChange={onChange} />
      </Form.Item>

      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
