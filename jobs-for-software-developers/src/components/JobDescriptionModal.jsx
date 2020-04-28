import React, { useState } from 'react';
import Modal from 'react-modal';
// To conver Json data to Markdown. 
import ReactMarkdown from 'react-markdown/with-html';

// import MySavedJobs from './MySavedJobs';

Modal.setAppElement('#root')

const JobDescriptionModal = (props) => {
    const [modalIsOpen, setmodalIsOpen] = useState(false)

    return (
        <div>
            <a style={{ fontSize: "20px", textDecoration: "none", color: "blue" }} href="##" onClick={() => setmodalIsOpen(true)}>{props.value.title}</a>

            <Modal
                className="react-modal"
                overlayClassName="react-modal-overlay"
                bodyOpenClassName="react-modal-open"
                isOpen={modalIsOpen}
                onRequestClose={() => setmodalIsOpen(false)}
                style={
                    {
                        overlay: {
                            position: 'fixed',
                            top: 70,
                            left: 20,
                            right: 20,
                            bottom: 20,
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        },
                        content: {
                            position: 'absolute',
                            top: '40px',
                            left: '100px',
                            right: '100px',
                            bottom: '40px',
                            border: '2px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '8px'
                        }
                    }
                }
            >

                {/* Data rendering passed in as props */}
                <div style={{ display: 'grid', gridTemplateColumns: '80% 20%', alignItems: "right" }}>
                    <div style={{ borderRight: "0.8px solid #ccc", padding: "0 5px" }}>
                        <button onClick={() => setmodalIsOpen(false)} className='btn btn-outline-primary btn-sm' style={{ marginBottom: '16px' }}>Close Form</button><br />

                        {/* <MySavedJobs jobID={props.value.id} /> */}
                        <h3>Job Description:</h3>
                        <h2><i>{props.value.title}</i></h2>
                        <ReactMarkdown source={props.value.description} escapeHtml={false} />
                    </div>

                    <div style={{ textAlign: "right", marginTop: "60px" }}>
                        <div style={{ marginBottom: "80px" }}>
                            <img src={props.value.company_logo} alt="company-logo" style={{ maxWidth: "80%", maxHeight: "20%", paddingBottom: "40px" }} />
                            <p>
                                {props.value.company}
                                <br />
                                <a href={props.value.company_url} target="_blank" rel="noopener noreferrer">Company URL</a>
                                <br />
                                {props.value.location}
                                <br />
                                {props.value.type}
                            </p>
                        </div>

                        <div style={{ background: "rgb(255, 254, 241)", padding: "0 auto", border: "0.8px gray solid", paddingRight: "8px", borderRadius: "3.5px", overflow: "hidden" }}>
                            <h3>How to apply</h3>
                            <hr />
                            <ReactMarkdown source={props.value.how_to_apply} escapeHtml={false} />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default JobDescriptionModal;
