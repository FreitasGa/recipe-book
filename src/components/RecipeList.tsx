/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { Recipe } from '../types';
import { RecipeItem } from './RecipeItem';

type RecipeListProps = {
  recipes: Recipe[];
};

export function RecipeList({ recipes }: RecipeListProps): JSX.Element {
  return (
    <FlatList
      data={recipes}
      renderItem={({ item }) => <RecipeItem key={item.id} recipe={item} />}
      keyExtractor={(item) => String(item.id)}
      ListEmptyComponent={<Text>Nenhuma receita encontrada</Text>}
      ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
    />
  );
}
