import * as React from "react";
import { ICarerSummary } from "src/types";
import DropZone from "react-dropzone";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./home.css";
const csv = require("csvtojson");

interface IProps {
  carers: ICarerSummary[];
}
interface IState {
  jsonResult: any[];
  uploading: boolean;
  error: any;
}

class UploadCSV extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      jsonResult: [],
      uploading: false,
      error: null
    };
    this.onDrop = this.onDrop.bind(this);
  }

  public onDrop(files: any) {
    const reader = new FileReader();
    this.setState({ uploading: true });
    reader.onload = () => {
      const fileAsBinaryString = reader.result;

      return csv({ output: "json" })
        .fromString(fileAsBinaryString)
        .then((csvRows: any) => {
          this.setState({ jsonResult: csvRows, uploading: false });
        });
    };

    reader.readAsText(files[0]);
  }

  public render() {
    return (
      <div className="page-home">
        <div className="upload-container">
          <div className="upload-column">
            <h2>Upload</h2>
            <DropZone onDrop={this.onDrop} accept=".csv">
              {({ getRootProps, getInputProps }: any) => (
                <section className="dropzone">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop your csv file here, or click to select file
                    </p>
                  </div>
                </section>
              )}
            </DropZone>
            <div className="upload-loading-wrapper">
              {this.state.uploading && <LinearProgress />}
              {this.state.jsonResult.length > 0 ? <div>Have data</div> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadCSV;
