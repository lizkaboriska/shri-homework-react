import React, { Component } from "react";
import { connect } from "react-redux";
import { StateInterface } from "../../../../interfaces/stateInterface";

class History extends Component<any> {
  changeToDetails = () => {
    this.props.dispatch({ type: "CHANGE_TO_DETAILS" });
  };
  render() {
    if (this.props.active_tab === "history") {
      return (
        <>
          <div className="layout__container layout__container_indent-h_s">
            <div className="section section_underline_grey section_indent-t_10">
              <div
                onClick={this.changeToDetails}
                className="text text_size_s text_line_m text_weight_bold text_color_grey tab"
              >
                DETAILS
              </div>
              <div className="text text_size_s text_line_m text_weight_bold text_indent-l_30 section__selected-item tab">
                HISTORY
              </div>
            </div>
          </div>
          <div className="layout__container layout__container_indent-h_s">
            <div className="history">
              <div className="history__date text text_size_sm text_line_m text_color_grey">
                Today
              </div>
              <div className="history__container">
                <div className="history__visual">
                  <div className="commit-icon"></div>
                  <div className="palka-vniz"></div>
                  <div className="commit-icon"></div>
                  <div className="palka-vniz"></div>
                  <div className="commit-icon"></div>
                </div>
                <div className="history__text">
                  <div className="history__info">
                    <div className="history__commit-message text text_size_sm text_weight_bold">
                      Support new distbuild protocol
                    </div>
                    <div className="history__comment text text_size_s text_line_s">
                      Не очень качественно написаны некоторые функции. Предлагаю
                      исправить это.
                    </div>
                    <div className="history__lower-str">
                      <div className="history__hash text text_size_s text_line_s text_color_blue">
                        s324e8
                      </div>
                      <div className="history__author text text_size_s text_line_s">
                        <div>by</div>
                        <div className="nickname">woodcutter</div>
                        <div>,</div>
                      </div>
                      <div className="history__update text text_size_s text_line_s">
                        4 s ago
                      </div>
                    </div>
                  </div>
                  <div className="history__info">
                    <div className="history__commit-message text text_size_sm text_weight_bold">
                      Force executing on MULTISLOT hosts by declaring Caches
                    </div>
                    <div className="history__comment text text_size_s text_line_s">
                      Не очень правильно с точки зрения ООП написаны некоторые
                      функции. Предлагаю исправить это.{" "}
                    </div>
                    <div className="history__lower-str">
                      <div className="history__hash text text_size_s text_line_s text_color_blue">
                        s324e8
                      </div>
                      <div className="history__author text text_size_s text_line_s">
                        <div>by</div>
                        <div className="nickname">woodcutter</div>
                        <div>,</div>
                      </div>
                      <div className="history__update text text_size_s text_line_s">
                        4 s ago
                      </div>
                    </div>
                  </div>
                  <div className="history__info">
                    <div className="history__commit-message text text_size_sm text_weight_bold">
                      Fixed run_diff_test in the realm
                    </div>
                    <div className="history__comment text text_size_s text_line_s">
                      Не очень правильно с точки зрения ООП написаны некоторые
                      функции. Предлагаю исправить это.{" "}
                    </div>
                    <div className="history__lower-str">
                      <div className="history__hash text text_size_s text_line_s text_color_blue">
                        s324e8
                      </div>
                      <div className="history__author text text_size_s text_line_s">
                        <div>by</div>
                        <div className="nickname">woodcutter</div>
                        <div>,</div>
                      </div>
                      <div className="history__update text text_size_s text_line_s">
                        4 s ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="history__hash-column">
                  <div className="history__hash-sep text text_size_s text_line_s text_color_blue">
                    s324e8
                  </div>
                  <div className="history__hash-sep text text_size_s text_line_s text_color_blue">
                    s324e8
                  </div>
                  <div className="history__hash-sep text text_size_s text_line_s text_color_blue">
                    s324e8
                  </div>
                </div>
                <div className="history__icons">
                  <div className="history__icon go-to-file"></div>
                  <div className="history__icon go-to-file"></div>
                  <div className="history__icon go-to-file"></div>
                </div>
              </div>
            </div>
            <div className="history">
              <div className="history__date text text_size_sm text_line_m text_color_grey">
                Yesterday
              </div>
              <div className="history__container">
                <div className="history__visual">
                  <div className="commit-icon"></div>
                  <div className="palka-vniz"></div>
                  <div className="commit-icon"></div>
                  <div className="palka-vniz"></div>
                  <div className="commit-icon"></div>
                </div>
                <div className="history__text">
                  <div className="history__info">
                    <div className="history__commit-message text text_size_sm text_weight_bold">
                      Support HTTP resources
                    </div>
                    <div className="history__comment text text_size_s text_line_s">
                      Не очень качественно написаны некоторые функции. Предлагаю
                      исправить это недоразумение.
                    </div>
                    <div className="history__lower-str">
                      <div className="history__hash text text_size_s text_line_s text_color_blue">
                        s324e8
                      </div>
                      <div className="history__author text text_size_s text_line_s">
                        <div>by</div>
                        <div className="nickname">woodcutter</div>
                        <div>,</div>
                      </div>
                      <div className="history__update text text_size_s text_line_s">
                        4 s ago
                      </div>
                    </div>
                  </div>
                  <div className="history__info">
                    <div className="history__commit-message text text_size_sm text_weight_bold">
                      Fixed run_diff_test
                    </div>
                    <div className="history__comment text text_size_s text_line_s">
                      Не очень правильно с точки зрения ООП написаны некоторые
                      функции. Предлагаю исправить это.{" "}
                    </div>
                    <div className="history__lower-str">
                      <div className="history__hash text text_size_s text_line_s text_color_blue">
                        s324e8
                      </div>
                      <div className="history__author text text_size_s text_line_s">
                        <div>by</div>
                        <div className="nickname">woodcutter</div>
                        <div>,</div>
                      </div>
                      <div className="history__update text text_size_s text_line_s">
                        4 s ago
                      </div>
                    </div>
                  </div>
                  <div className="history__info">
                    <div className="history__commit-message text text_size_sm text_weight_bold">
                      Update ya-bin and test_tool
                    </div>
                    <div className="history__comment text text_size_s text_line_s">
                      Не очень правильно с точки зрения ООП написаны некоторые
                      функции. Предлагаю исправить это.{" "}
                    </div>
                    <div className="history__lower-str">
                      <div className="history__hash text text_size_s text_line_s text_color_blue">
                        s324e8
                      </div>
                      <div className="history__author text text_size_s text_line_s">
                        <div>by</div>
                        <div className="nickname">woodcutter</div>
                        <div>,</div>
                      </div>
                      <div className="history__update text text_size_s text_line_s">
                        4 s ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="history__hash-column">
                  <div className="history__hash-sep text text_size_s text_line_s text_color_blue">
                    s324e8
                  </div>
                  <div className="history__hash-sep text text_size_s text_line_s text_color_blue">
                    s324e8
                  </div>
                  <div className="history__hash-sep text text_size_s text_line_s text_color_blue">
                    s324e8
                  </div>
                </div>
                <div className="history__icons">
                  <div className="history__icon go-to-file"></div>
                  <div className="history__icon go-to-file"></div>
                  <div className="history__icon go-to-file"></div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return "";
    }
  }
}

const mapStateToProps = (state: StateInterface) => ({
  active_tab: state.active_tab
});

export default connect(mapStateToProps)(History);
