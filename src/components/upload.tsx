import * as React from "react";
import { ICarerSummary } from "src/types";
import DropZone from "react-dropzone";
import LinearProgress from "@material-ui/core/LinearProgress";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import "./upload.css";
const csv = require("csvtojson");

interface IProps {
  carers: ICarerSummary[];
}
interface IState {
  jsonResult: any[];
  uploading: boolean;
  expanded: boolean;
  error: any;
}

class UploadCSV extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      jsonResult: [],
      uploading: false,
      expanded: true,
      error: null
    };
    this.onDrop = this.onDrop.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  public onChange() {
    this.setState({ expanded: !this.state.expanded });
  }

  public onDrop(files: any) {
    const reader = new FileReader();
    this.setState({ uploading: true });
    reader.onload = () => {
      const fileAsBinaryString = reader.result;

      return csv({ output: "json" })
        .fromString(fileAsBinaryString)
        .then((csvRows: any) => {
          this.setState({
            jsonResult: csvRows,
            uploading: false,
            expanded: false
          });
        });
    };

    reader.readAsText(files[0]);
  }

  public render() {
    return (
      <div className="page-home">
        <ExpansionPanel
          square={true}
          defaultExpanded={true}
          expanded={this.state.expanded}
          onChange={this.onChange}
        >
          <ExpansionPanelSummary
            expandIcon={<i className="material-icons">keyboard_arrow_down</i>}
            aria-controls="panel-content"
            id="panel-header"
          >
            <h2>Upload</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="upload-container">
              <div className="upload-column">
                <DropZone onDrop={this.onDrop} accept=".csv">
                  {({ getRootProps, getInputProps }: any) => (
                    <section className="dropzone">
                      <div className="dropzone-content" {...getRootProps()}>
                        <input {...getInputProps()} />
                        <i className="material-icons upload-icon">
                          cloud_upload
                        </i>
                        <p>
                          Drag 'n' drop your csv file here, or click to select
                          file
                        </p>
                      </div>
                    </section>
                  )}
                </DropZone>
                <div className="upload-loading-wrapper">
                  {this.state.uploading && (
                    <LinearProgress variant="indeterminate" />
                  )}
                  {this.state.jsonResult.length > 0 ? (
                    <div>Have data</div>
                  ) : null}
                </div>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default UploadCSV;
