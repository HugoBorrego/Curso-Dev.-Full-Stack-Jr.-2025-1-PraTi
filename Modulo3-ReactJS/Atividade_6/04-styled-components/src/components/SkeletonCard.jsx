import styled, { keyframes } from "styled-components"

const pulse = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 380px;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`

const SkeletonBox = styled.div`
  background: linear-gradient(90deg, #ccc, #eee, #ccc);
  background-size: 400px 100%;
  animation: ${pulse} 1.5s infinite linear;
  border-radius: 6px;
`

const ImageWrapper = styled(SkeletonBox)`
  height: 220px;
  width: 100%;
  margin-bottom: 12px;
`

const TextLine = styled(SkeletonBox)`
  height: ${({ height }) => height || "1rem"};
  width: ${({ width }) => width || "100%"};
  margin-bottom: 8px;
`

export const SkeletonCard = () => (
  <Card aria-hidden="true">
    <ImageWrapper />
    <TextLine height="1rem" width="80%" />
    <TextLine height="1rem" width="60%" />
  </Card>
)
