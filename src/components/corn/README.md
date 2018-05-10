Omaha JS Corn Logo
==================
> Omaha JS "corn" logo as seen at [omaha.js.org](https://omaha.js.org)

**Install Dependencies**

```bash
npm install react prop-types emotion react-emotion
```

**Example Usage**

```js
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    width: 100%;
`;
const IndexPage = () => (
  <div>
      <Wrapper>
          <Logo height="50vh" style={{
              flex: 'flex-grow',
              top: '10vh'
          }}/>
      </Wrapper>
  </div>
);
```
