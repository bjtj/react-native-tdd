# React Native TDD #

React Native 와 TDD 공부

## Testing ##

<https://reactnative.dev/docs/testing-overview>

> ## Why Test ##
>
> We're humans, and humans make mistakes. Testing is important because it helps you uncover these mistakes or verifies that your code is working. Perhaps even more importantly, testing ensures that your code continues to work in the future as you add new features, refactor the existing ones, or upgrade major dependencies of your project.
>
> There is more value in testing than you might realize. One of the best ways to fix a bug in your code is to write a failing test that exposes it. Then when you fix the bug and re-run the test, if it passes it means the bug is fixed, never reintroduced into the code base.
>
> Tests can also serve as documentation for new people joining your team. For people who have never seen a codebase before, reading tests can help them understand how the existing code works.
>
> Last but not least, more automated testing means less time spent with manual QA, freeing up valuable development time

왜 테스트 하는가? (요약)

* 휴먼 에러 방지
* 테스트는 한번 작성하면 새로운 기능, 리펙토링 시 계속해서 문제 없이 동작함을 검증해 줌
* 주요 의존성 변경 사항이 있을 때 바로 검증 가능
* 코드를 보지 않아도 문제가 수정을 확인할 수 있음
* 테스트는 일종의 문서 역할을 함
  * 텍스트 문서보다 더 좋다고 생각하는데 이유는 직접 실행해 보고 문제 없이 동작함을 직접 확인할 수 있기 때문
