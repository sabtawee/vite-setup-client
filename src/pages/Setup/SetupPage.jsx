import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function SetupPage() {
  const mfgdate = moment().format("YYYY-MM-DD");
  const [date, setDate] = useState("");
  const [model, setModel] = useState("");
  const [lotNo, setLotNo] = useState("");
  const [mcNo, setMcNo] = useState("");
  const [shift, setShift] = useState("");

  return (
    <>
      <section className="content">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">SETUP</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">SETUP</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="card card-outline card-warning">
                <div className="card-header">
                  <h3 className="card-title">General Elements</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label className="col-form-label">Date</label>
                        <input
                          type="date"
                          className="form-control"
                          value={mfgdate}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Model</label>
                    <input
                      type="text"
                      className="form-control"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Lot No</label>
                    <input
                      type="text"
                      className="form-control"
                      value={lotNo}
                      onChange={(e) => setLotNo(e.target.value)}
                    />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label className="col-form-label">M/C No.</label>
                        <input
                          type="text"
                          className="form-control"
                          value={mcNo}
                          onChange={(e) => setLotNo(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label className="col-form-label">Shift</label>
                        <input
                          type="text"
                          className="form-control"
                          value={shift}
                          onChange={(e) => setLotNo(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
