import {Button, defaultTheme, Provider} from '@adobe/react-spectrum';

export function SimpleButton() {
  return <>
    <Provider theme={defaultTheme}>
      <Button
        variant="accent"
        onPress={() => alert('Hey there!')}
      >
        Hello React Spectrum!
      </Button>
    </Provider>
  </>
}
