import 'dart:html';

void main() {
  Element title = querySelector('#title');
  Element subtitle = querySelector('#subtitle');
  Element content = querySelector('#content');
  Element bottom = querySelector("#bottom-page-padding");

  title.text = 'Shared Expenses';

  var pageHeight = window.innerHeight;

  document.body.style.background =
      "url(assets/icon_300.png) no-repeat fixed center";

  window.onScroll.listen((event) {
    if (window.pageYOffset > 0) {
      var opac = (window.pageYOffset / pageHeight);
      document.body.style.background =
          "linear-gradient(rgba(255, 255, 255, $opac), rgba(255, 255, 255, $opac)), url(assets/icon_300.png) no-repeat fixed center";
    }
  });

  subtitle.children.add(
      Subtitle(text: 'Simple + Powerful Group Expense Tracking').getElement());
  subtitle.children.add(Subtitle(
          text: 'Early release on Android November 2019, coming soon to iPhone')
      .getElement());
  subtitle.children.add(moreInfoButton());
  bottom.children.add(Subtitle(text: 'contact: kris@sharedexpenses.app', cssClass: 'contact').getElement());



  var contentVisible = false;
  List<String> howItWorks = [
    "For a group of roommates who share utility bills, calculating who owes what can be a pain.",
    "It can be especially difficult if people's obligations change, like if someone moves in or out and that date doesn't align with when any bills are for.",
    "Shared Expenses makes it easy to keep track of bills and payments within a group, and adjusting individual responsibilities by date is especially easy.",
    "It is still in development but it is ready to use, so if you're interested in trying it out and would be willing to give some feedback, let us know!"
  ];
  List<String> pictures = [
    "url(assets/dollars_arrow.png)",
    "url(assets/moving_arrow.png)",
    "url(assets/friends_arrow.svg)",
    "url(assets/construction_arrow.svg)"
  ];

  void addContent(int i) {
    content.children.add(
        PictureContainer(text: howItWorks[i], picture: pictures[i])
            .getElement());
  }

  subtitle.onClick.listen((event) {
    if (!contentVisible) {
      contentVisible = true;
      var i = 0;
      addContent(i);
      content.onClick.listen((event) {
        i++;
        if (i >= howItWorks.length) {
          i=0;          
        }
        content.children.removeLast();
        addContent(i);
      });

      subtitle.children.removeLast();
    } else {
      contentVisible = false;
      content.children.removeLast();
      subtitle.children.add(moreInfoButton());
    }
  });
}

Element moreInfoButton(){
  Element buttonElement = DivElement();
  buttonElement.style.width = '300px';
  buttonElement.style.margin = 'auto';
  buttonElement.children.add(Subtitle(text:'More info').getElement());
  buttonElement.style.border = "4px #228d57 Solid";

  return buttonElement;
}

class Subtitle {
  final String text;
  final String element;
  final String cssClass;

  Subtitle({this.text, this.element = 'p', this.cssClass = 'newElement'});

  Element getElement() {
    Element theElement = Element.tag(element);
    theElement.classes.add(cssClass);
    theElement.text = text;
    return theElement;
  }
}

class PictureContainer {
  final String picture;
  final String text;

  PictureContainer({this.picture, this.text});

  Element getElement() {
    Element element = Element.tag('div');
    element.style.height = "500px";
    element.style.background = "linear-gradient(rgba(255, 255, 255, .9), rgba(255, 255, 255, .3)), $picture no-repeat center";
    element.style.backgroundSize = "500px 500px";
    // element.attributes['background-image'] = picture;
    element.children.add(Subtitle(text: text).getElement());
    return element;
  }
}
