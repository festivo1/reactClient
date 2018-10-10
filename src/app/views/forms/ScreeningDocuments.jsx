import React from "react";
import ScreeningPrimaryRequest from "../screeningnatural/ScreeningTabTitle.jsx";
import ScreeningTabTitle from '../screeningnatural/ScreeningTabTitle.jsx';
import './css/screeningDocuments.css';


class ScreeningDocuments extends React.Component {


    render() {
        return (
            <div>
                <ScreeningTabTitle />
                <div className='divStyle'>
                    <div>
                        <label>Attachment type
                        </label>
                        <select required>
                            <option value='citizenship'>citizenship</option>
                            <option value='passport'>passport</option>
                            <option value='others'>others</option>
                        </select>
                    </div>
                    <div>
                        <label>Attachment</label>
                        <input required type='file'></input>
                    </div>
                    <div>
                        <label>Notes</label>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add Attachment</button>
                        <button>Remove Attachment</button>
                    </div>
                    <div>
                        <button>Proceed</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ScreeningDocuments;

