"use client"
import { useState, useEffect } from 'react'
import { Calendar, Select, Row, Col, } from 'antd';


export default function GenerateQrDatePicker(props) {
    const { setExpiry, disabledDate } = props

    const onSelect = (value) => {
        setExpiry(value)
    }

    return <Calendar fullscreen={false} onSelect={onSelect}
        disabledDate={disabledDate}

        fullCellRender=''
        headerRender={({ value, type, onChange, onTypeChange }) => {
            const start = 0;
            const end = 12;
            const monthOptions = [];

            let current = value.clone();
            const localeData = value.localeData();
            const months = [];
            for (let i = 0; i < 12; i++) {
                current = current.month(i);
                months.push(localeData.months(current));
                // monthsShort
            }

            for (let i = start; i < end; i++) {
                monthOptions.push(
                    <Select.Option key={i} value={i} className="month-item">
                        {months[i]}
                    </Select.Option>,
                );
            }

            const year = value.year();
            const month = value.month();
            const options = [];
            // for (let i = year - 10; i < year + 20; i += 1) {
            for (let i = year; i < year + 20; i += 1) {
                options.push(
                    <Select.Option key={i} value={i} className="year-item">
                        {i}
                    </Select.Option>,
                );
            }
            return (
                <div style={{ padding: 8 }}>
                    <Row gutter={8}>
                        {/* <Col>
                            <Radio.Group
                                size="small"
                                onChange={(e) => onTypeChange(e.target.value)}
                                value={type}
                            >
                                <Radio.Button value="month">Month</Radio.Button>
                                <Radio.Button value="year">Year</Radio.Button>
                            </Radio.Group>
                        </Col> */}
                        <Col>
                            <Select
                                popupMatchSelectWidth={false}
                                // dropdownMatchSelectWidth={false}
                                className="my-year-select w-[100px]"
                                value={year}
                                onChange={(newYear) => {
                                    const now = value.clone().year(newYear);
                                    onChange(now);
                                }}
                            >
                                {options}
                            </Select>
                        </Col>
                        <Col>
                            <Select
                                popupMatchSelectWidth={false}
                                // dropdownMatchSelectWidth={false}
                                value={month}
                                onChange={(newMonth) => {
                                    const now = value.clone().month(newMonth);
                                    onChange(now);
                                }}
                                className='w-[120px]'
                            >
                                {monthOptions}
                            </Select>
                        </Col>
                    </Row>
                </div>
            );
        }}

    />

}
