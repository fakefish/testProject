/*
ParseHTML-React-Native (Version 0.1)
Coded by: Simar (github.com/iSimar)
GitHub Project: https://github.com/iSimar/ParseHTML-React-Native
*/

'use strict';

var React = require('react-native');

var {
  View,
  Text,
  Image,
  StyleSheet
} = React;

var ParseHTML = React.createClass({
  getInitialState: function() {
    var defaultTagToStyle = {
                              '<b>': {fontWeight: 'bold'},
                              '<strong>': {fontWeight: 'bold'},
                              '<i>': {fontStyle: 'italic'},
                              '<normal>': {fontStyle: 'normal'},
                              '<em>': {fontStyle: 'italic'},
                              '<img>': {}
                            };
    if(this.props.customTagToStyle){
      for(var i in Object.keys(this.props.customTagToStyle)){
        defaultTagToStyle[Object.keys(this.props.customTagToStyle)[i]] = this.props.customTagToStyle[Object.keys(this.props.customTagToStyle)[i]];
      }
    }
    return {
      tagToStyle: defaultTagToStyle,
    };
  },
  _getNextHTMLTag: function(html_code, tags_to_look_for){
    var min = -1;
    var nextTag = "";
    // console.log(html_code)
    for (var i = 0; i < tags_to_look_for.length; i++) {
      var tag = tags_to_look_for[i];
      var nextIndex = html_code.indexOf(tag);
      if(min == -1){
        min = nextIndex;
        nextTag = tag;
      }
      else{
        if(min>nextIndex && nextIndex != -1){
          min = nextIndex;
          nextTag = tag;
        }
      }
    }
    return {"tag": nextTag, "indexStart": min};
  },
  _buildHTMLParseTree: function(html_code){
    // console.log(html_code)
    return this._buildHTMLParseTreeOverload(html_code, []);
  },
  _buildHTMLParseTreeOverload: function(html_code, segments, style){
    if(segments==undefined)
      segments = [];
    if(style==undefined)
      style = [];
    var nextTag = this._getNextHTMLTag(html_code, Object.keys(this.state.tagToStyle));
    // console.log(nextTag)
    if(nextTag.indexStart != -1){
      if(nextTag.indexStart>0){
        segments.push({
                        "text": html_code.slice(0, nextTag.indexStart),
                        "style": style,
                      });
      }
      var endTag = "</"+(nextTag.tag).slice(1);
      var indexEnd = html_code.indexOf(endTag);
      var new_text = html_code.slice(nextTag.indexStart+nextTag.tag.length, indexEnd);
      // console.log(new_text)
      segments.push({"segments": this._buildHTMLParseTreeOverload(new_text, [], style.concat([this.state.tagToStyle[nextTag.tag]]))});
      return this._buildHTMLParseTreeOverload(html_code.slice(indexEnd+endTag.length, html_code.length), segments);
    }
    else{
      if(html_code!=''){
        // console.log(html_code)
        segments.push({"text": html_code,
                       "style": style});
      }
      return segments;
    }
  },
  _renderHTMLParseTree: function(parseTree){
    return parseTree.map((segment)=>{
      if(segment.segments)
        return this._renderHTMLParseTree(segment.segments)
      if(segment.text.indexOf('<img') == 0) {
        return <Image style={segment.style} source={{uri:segment.text.match(/\/img\/\w+/g)[0]}} />
      }
      return <Text style={segment.style}>{segment.text}</Text>;
    });
  },
  _decodeHTMLEntities: function(str){
    console.log(str.replace(/<a\s+(?:[^>]*?\s+)?href="([^"]*)" rel="nofollow">(.*)?<\/a>/g, "$1"))
    return String(str)
      .replace(/&#x2F;/g, '/')
      .replace(/&#x27;/g, '\'')
      .replace(/&quot;/g, '\"')
      .replace(/<a\s+(?:[^>]*?\s+)?href="([^"]*)" rel="nofollow">(.*)?<\/a>/g, "$1")
      .replace(/&gt;/g, '>')
      .replace(/&lt;/g, '<')
      .replace(/<br(>|\s|\/)*/g, '\n');
  },
  render: function() {
    return (
      <View style={[styles.container, this.props.style]}>
          {this._renderHTMLParseTree(this._buildHTMLParseTree(this._decodeHTMLEntities(this.props.code)))}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});


module.exports = ParseHTML;